import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left text-4xl font-bold py-6'>
        <span className='text-blue-600'>{type} Post</span>
      </h1>
      <p className='desc text-left text-lg text-gray-700 mb-8'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-2xl flex flex-col gap-7 rounded-lg shadow-xl bg-gradient-to-br from-zinc-50 to-cyan-600 p-8'
      >
        <label className='flex flex-col'>
          <span className='font-semibold text-base text-gray-800 mb-2'>
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea border-2 border-blue-400 rounded-lg p-3 focus:outline-none focus:border-blue-600'
            rows='6'
          />
        </label>

        <label className='flex flex-col'>
          <span className='font-semibold text-base text-gray-800 mb-2'>
            Field of Prompt{" "}
            <span className='font-normal text-sm'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input border-2 border-blue-400 rounded-lg p-3 focus:outline-none focus:border-blue-600'
          />
        </label>

        <div className='flex justify-between items-center mt-8'>
          <Link href='/' className='text-gray-600 text-sm hover:underline'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-6 py-3 text-sm bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 disabled:opacity-50'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
