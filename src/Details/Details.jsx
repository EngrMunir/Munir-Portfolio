import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';


const Details = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => String(p.id) === id); // Ensure ID is compared as string

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <h2 className="text-2xl text-red-500">Project not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-neutral-900 p-6 rounded-lg shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded mb-4"
        />

        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <p className="text-neutral-400 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-800 text-sm px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Live Site
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            Client Code
          </a>
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white"
            >
              Server Code
            </a>
          )}
        </div>

        <div className="mt-8">
          <Link to="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
