import React, { useState } from 'react'

const TeamCard = ({team,setTeam,players,setPlayers}) => {
    // const [team, setteam] = useState("");
    // const [team2, setTeam2] = useState("");
    // const [players, setplayers] = useState([]);
    // const [players2, setPlayers2] = useState([]);
    const [player, setPlayer] = useState("");
    // const [player2, setPlayer2] = useState("");
    const handlePlayer = (e) => {
        e.preventDefault();
        setPlayers([...players, player]);
        setPlayer("");
    }
    return (
        <form className='text-black px-3 flex-grow bg-blue-900 '>
            Team 1
            <div>
                <label htmlFor="team_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Team name</label>
                <input type="text" id="team_name" value={team} onChange={(e) => setTeam(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Team name" required />
            </div>

            <div className='mt-2'>
                <div className='my-2 flex text-white flex-col'>
                    {players.length !== 0 &&
                        players.map((person) => {
                            return (<p>{person}</p>)
                        })}

                </div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Player name</label>
                <input type="text" id="last_name" onChange={(e) => { setPlayer(e.target.value) }} value={player} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                <button disabled={player.length === 0 ? true : false} type="button" onClick={(e) => handlePlayer(e)} className="text-white disabled:cursor-not-allowed  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Player</button>
            </div>

        </form>

    )
}

export default TeamCard