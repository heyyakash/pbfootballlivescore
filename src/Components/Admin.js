import React, { useState } from 'react'
import TeamCard from './Admin/TeamCard';

const Admin = () => {
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [players1, setPlayers1] = useState([]);
    const [players2, setPlayers2] = useState([]);
    const [player1, setPlayer1] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const live = [
            {
                teamName:team1,
                players:players1,
                score:0
            },
            {
                teamName:team2,
                players:players2,
                score:0,
            }
        ]
        console.log(live);
        
        
    }
    

    return (
        <div className='text-white border-blue-500 my-4 mx-2'>
            <h2 className='font-bold'>Admin</h2>
            <h2 className='font-bold'>Live</h2>
            <div className=' flex  mt-2 p-4 rounded-xl gap-2 flex-wrap border-2'>
                <TeamCard team = {team1} setTeam = {setTeam1} players = {players1} setPlayers = {setPlayers1} />
                <TeamCard team = {team2} setTeam = {setTeam2} players = {players2} setPlayers = {setPlayers2} />
             
            </div>
            <button onClick = {(e)=>handleSubmit(e)} type="button" class="text-white disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" disabled ={team1.length===0 || team2.length===0 || players1.length<5 || players2.length<5?true:false}>Submit</button>
        </div>
    )
}

export default Admin