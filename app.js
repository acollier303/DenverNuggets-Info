const playerDiv = document.querySelector('player');
const playerUrl = "https://www.balldontlie.io/api/v1/players";
const teamUrl = "https://www.balldontlie.io/api/v1/teams";
/************
Fetch Request
*************/
async function getTeams(url) {
    const playerRes = await fetch(url);
    const playerJSON = await playerRes.json();

    return{...playerJSON};
};

/*************
 * React Components
 *************/

const Header = () => {
    return(
        <header>
            <h1>Denver Nuggets</h1>
            <span className='team'>rhap7</span>
        </header>
    );
}

const Team = () => {
    return (
        <div className='teamInfo'>
            <h2>Team Information:</h2>
            <div>
                <Menu />
            </div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg'></img>
            </div>
        </div>
    )
}

const Menu = () => {
    return (
        <div>
            <ul id='menu'>
                <li>Season Team Stats</li>
                <li>Roster</li>
                <li>Games</li>
            </ul>

        </div>
    )
}

const App = () => {
    return (
        <div className="teamDiv">
            <Header />    
            <Team />
        </div>
    );
}

//----- Render ----
ReactDOM.render(
    <App />,
    document.getElementById('root')
);