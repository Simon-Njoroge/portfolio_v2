
const Blog = () => {
  return (
    <div className="bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">My Blog Posts</h1>

        {/* Blog 1 */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            My Journey into Full-Stack Web Development
          </h2>
          <p className="text-gray-100">
            When I first began coding, I started with basic HTML and CSS, building simple static websites. Over time, I developed a deeper interest in creating more dynamic and interactive applications, which led me to explore JavaScript and later delve into full-stack development.
          </p>
          <p className="text-gray-100 mt-2">
            My experience working with technologies like React.js, Node.js, and PostgreSQL has allowed me to build robust applications that handle both front-end and back-end processes. It's been a rewarding journey filled with continuous learning and growth, and I'm excited to keep expanding my skills in this ever-evolving field.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            The Power of Tailwind CSS for Responsive Design
          </h2>
          <p className="text-gray-100">
            Tailwind CSS has revolutionized the way I approach styling in my web projects. Its utility-first design principles allow for rapid development and make it easier to create responsive layouts. Rather than writing custom CSS for each element, I can quickly add classes that ensure consistency and scalability.
          </p>
          <p className="text-gray-100">
            In my latest projects, I've used Tailwind to create beautiful and responsive UIs without the need for complex media queries or long stylesheets. It's a tool that has greatly improved both my productivity and the overall quality of my designs.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Building Scalable Back-End APIs with Node.js
          </h2>
          <p className="text-gray-100">
            One of the most exciting parts of being a full-stack developer is building scalable and efficient back-end systems. With Node.js, I’ve been able to develop APIs that can handle thousands of requests per second, making it a great choice for real-time applications.
          </p>
          <p className="text-gray-100">
            In one of my recent projects, I built a RESTful API using Node.js and Express, which connects to a PostgreSQL database. The API powers a vehicle management system that efficiently tracks vehicle data, assignments, and maintenance schedules. Node.js's event-driven architecture is perfect for such high-performance needs, and I look forward to utilizing it in future projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
