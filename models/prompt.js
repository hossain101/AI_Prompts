import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Please provide a prompt"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a tag"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a creator"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
