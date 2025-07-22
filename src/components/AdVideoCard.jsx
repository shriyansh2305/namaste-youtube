const AdWrapper = (WrappedComponent) => (props) => (
  <div className="p-1 m-1 border border-red-500">
    <WrappedComponent {...props} />
  </div>
);

export default AdWrapper;