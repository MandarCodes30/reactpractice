export class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userinfo: "Mandar",
            login: "kulal"
        }
    }
   
     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mojombo")
        const json = await data.json();
        this.setState({
            userinfo: json
        })
        console.log(json)
     }
    render() {
        const {name,login,avatar_url} = this.state.userinfo;
        return(
            <div className="user-card">
            <img src={avatar_url}/>
            <h1>Name: {name}</h1>
            <h3>Location: {login}</h3>
            <p>kulalmandar@gmail.com</p>
            </div>
        )
    }
}