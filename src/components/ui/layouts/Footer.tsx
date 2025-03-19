import Container from "@/components/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20 bg-[#111617] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-10 px-6 py-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 text-sm">
              <h3>
                Event <span className="text-primary">360</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 text-sm">
              <a rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 text-sm">
              <a rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 text-sm">
              <a rel="noopener noreferrer" href="#">
                GitHub
              </a>
              <a rel="noopener noreferrer" href="#">
                Discord
              </a>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
              <a rel="noopener noreferrer" href="#">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <hr className="text-gray-500" />

        <div className="flex items-center justify-center text-sm">
          <span className="mt-4">
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
