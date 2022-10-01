import Container from "../components/container";

const TheFooter = () => {
  return (
    <footer className="text-white">
      <div className="bg-blue-700 py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4">
            <div>
              <h4 className="text-xl capitalize font-medium">title</h4>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h4 className="text-xl capitalize font-medium">title</h4>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h4 className="text-xl capitalize font-medium">title</h4>
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-blue-900 py-4">
        <Container>
          <div className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </Container>
      </div>
    </footer>
  );
};
export default TheFooter;
