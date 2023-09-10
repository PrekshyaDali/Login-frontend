import classes from "./Dashboard.module.css";
const Dashboard = (props) => {
  return (
    <>
    <div className={classes.cover}>
      <div classname={classes.dashboard}>
        <div className = {classes.welcome}>
          <h1>Welcome Back</h1>
        </div>
        <div className = {classes.logout}>
          <button onClick = {()=>props.setIsAuthenticated(false)}>Logout</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
