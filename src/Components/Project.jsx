import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl font-bold text-white"
            >
                Projects
            </motion.h2>
            <div className="grid gap-10 md:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-900 rounded-2xl shadow-md p-6 border border-neutral-700 flex flex-col justify-between"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-sm text-neutral-400 mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-purple-900 text-white text-xs font-medium px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-auto">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                            >
                                Live
                            </a>
                           
                            <Link to={`/details/${project.id}`}>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Project;
