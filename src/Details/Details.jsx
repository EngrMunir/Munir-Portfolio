import { useParams, Link } from 'react-router-dom';
import { projects } from '../constants';
import { BsArrowLeft } from 'react-icons/bs';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';


// const Details = () => {

//   return (
//     // <div className="min-h-screen bg-black text-white p-4 md:p-8">
//     //   <div className="max-w-4xl mx-auto bg-neutral-900 p-6 rounded-lg shadow-lg">
//     //     <img
//     //       src={project.image}
//     //       alt={project.title}
//     //       className="w-full h-auto rounded mb-4"
//     //     />

//     //     <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
//     //     <p className="text-neutral-400 mb-4">{project.description}</p>

//     //     <div className="mb-4">
//     //       <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
//     //       <div className="flex flex-wrap gap-2">
//     //         {project.technologies.map((tech, index) => (
//     //           <span
//     //             key={index}
//     //             className="bg-purple-800 text-sm px-2 py-1 rounded"
//     //           >
//     //             {tech}
//     //           </span>
//     //         ))}
//     //       </div>
//     //     </div>

//     //     <div className="flex flex-wrap gap-4 mt-6">
//     //       <a
//     //         href={project.live}
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //         className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
//     //       >
//     //         Live Site
//     //       </a>
//     //       <a
//     //         href={project.client}
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //         className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
//     //       >
//     //         Client Code
//     //       </a>
//     //       {project.server && (
//     //         <a
//     //           href={project.server}
//     //           target="_blank"
//     //           rel="noopener noreferrer"
//     //           className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white"
//     //         >
//     //           Server Code
//     //         </a>
//     //       )}
//     //     </div>

//     //     <div className="mt-8">
//     //       <Link to="/" className="text-blue-400 hover:underline">
//     //         ← Back to Home
//     //       </Link>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

const Details =  () => {
   const { id } = useParams();
   const project = projects.find(p => String(p.id) === id);

     if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <h2 className="text-2xl text-red-500">Project not found.</h2>
      </div>
    );
  }
  

  return (
    <section className="container mx-auto px-6 py-20 bg-slate-900 text-gray-200">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <BsArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition flex items-center"
              >
                Live Demo
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg font-medium transition flex items-center"
              >
                <FaGithub className="mr-2 w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-12 aspect-video">
          <img
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Project Overview
            </h2>
            <div className="space-y-4 text-slate-300">
              {project.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 bg-${tech.color}-500/10 text-${tech.color}-400 rounded-full text-sm border border-${tech.color}-400/20`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Key Features
            </h2>
            <ul className="space-y-3 text-slate-300">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {project.challenges.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-slate-300 mb-3">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-slate-400">
                    <span className="text-blue-400">Solution:</span>{" "}
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-slate-800 pb-2">
              Lessons Learned
            </h2>
            <div className="space-y-4 text-slate-300">
              {project.lessonsLearned.map((lesson, index) => (
                <p key={index}>{lesson}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
