import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET (read)

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return { status: 500, body: error.message };
  }
};

//PATCH(update)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    // await connectToDB();
    // const prompt = await Prompt.findById(params.id);
    // if(!prompt){
    //     return new Response(JSON.stringify({message:'Prompt not found'}), { status: 404 });
    // }
    // const body = await request.json();
    // prompt.set(body);
    // await prompt.save();
    // return new Response(JSON.stringify(prompt), { status: 200 });

    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return { status: 500, body: error.message };
  }
};

//DELETE (delete)

export const DELETE = async (request, { params }) => {
  try {
    // await connectToDB();
    // const prompt = await Prompt.findById(params.id);
    // if(!prompt){
    //     return new Response(JSON.stringify({message:'Prompt not found'}), { status: 404 });
    // }
    // await prompt.remove();
    // return new Response(JSON.stringify({message:'Prompt deleted successfully'}), { status: 200 });

    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response(
      JSON.stringify({ message: "Prompt deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return { status: 500, body: error.message };
  }
};
