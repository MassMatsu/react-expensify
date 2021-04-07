import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

// this is a normal function to return the component which will be HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>this is private info. please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
// this is a normal function to return the component which will be HOC
const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view your information</p>
      )}
    </div>
  );
};

// AdminInfo will be the HOC of Info (Component includes Info and more props)
const AdminInfo = withAdminWarning(Info);
// AdminAuth will be the HOC of Info (Component includes Info and more props)
const AuthInfo = requireAuth(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info='there are the details' />,
//   document.getElementById('app')
// );

// toggle isAuth and display different contents
ReactDOM.render(
  <AuthInfo isAuth={true} info='Name: Masato ID: 3456 DBO: 22.02.1974' />,
  document.getElementById('app')
);
