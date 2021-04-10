let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};


let newObject = Object.assign({},person);
newObject.address.city = 'Delhi';


const ADD = 'ADD';

function add(action){
    return {

    action.type : ADD,
    payload:'message'
    }
}

<Router>
    <Switch>
    <Route path = '/' component = {Home}></Route>
    <Route path = '/contact' component = {Contact}></Route>
    </Switch>



</Router>
