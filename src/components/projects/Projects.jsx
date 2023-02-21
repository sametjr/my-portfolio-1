import React from 'react'
import './projects.css'
import ProjectCard from './ProjectCard'
import PlasticWhite from '../../assets/plastic-white.png'
import RocketIcon from '../../assets/Rocket.jpg'
import StarIcon from '../../assets/Star.png'
import ZigZagIcon from '../../assets/Zigzag.png'
import Vegetables from '../../assets/Vegetables.png'
import AtomIcon from '../../assets/AtomSim.png'
import WorkWithYourPastIcon from '../../assets/Clone.png'

const Projects = () => {
    
    const projects = [
        {
            img: RocketIcon,
            name: 'Rocket Magnet',
            desc: 'This is an android game that I developed with Unity. It is a game where you have to collect all the metal balls with the magnet you control. You can also collect the coins to buy new ball skins. The game has 25 levels. You can download the game from the Google Play Store.',
            github_link: 'https://github.com/sametjr/magnetica',
            demo_link: 'https://play.google.com/store/apps/details?id=com.Puding.Magnetica'
        },
        {
            img: StarIcon,
            name: 'Hit The Lines',
            desc: 'This is an android game that I developed with Unity. It is a game where you have to hit the lines with the ball you control. You have to dodge obstacles and go higher as you can go. You can download the game from the Google Play Store.',
            github_link: 'https://github.com/sametjr/hit-the-lines',
            demo_link: 'https://play.google.com/store/apps/details?id=com.Puding.HitTheLines'
        },
        {
            img: ZigZagIcon,
            name: 'ZigZag Game',
            desc: 'This is the replica of the famous game "ZigZag". I developed this game with Unity. I learned lots of unity basics like Object Pooling, Coroutines, etc. while developing this game.',
            github_link: 'https://github.com/sametjr/zigzag-game-replica',
            demo_link: 'https://samet-jr.itch.io/zigzag-replica'
        },
        {
            img: Vegetables,
            name: 'Vegetable Game',
            desc: 'This is a mobile game that I developed for a case study with Unity. The levels of the game can be edited from a website I created using React. If there is no internet connection, the game will load the default levels from a local JSON file.',
            github_link: 'https://github.com/sametjr/vegetable-game-v3',
            demo_link: 'https://drive.google.com/drive/folders/1evvY8-AXX8vP6XcuT1inT-WxGX7X7_Ae'
        },
        {
            img: AtomIcon,
            name: 'Atom Simulation',
            desc: 'This is a simulation of the atom. I developed this simulation with Unity.',
            github_link: 'https://github.com/sametjr/Atom-Simulation',
            demo_link: 'https://samet-jr.itch.io/atom-simulation'
        },
        {
            img: WorkWithYourPastIcon,
            name: 'Work With Your Past',
            desc: 'I made this game for Brackeys Game Jam 23. The theme of the game jam was "An end is a new beginning". In this game, you record your movements and then you can play them back. So, choices you have made in the past will affect your future.',
            github_link: 'https://github.com/sametjr/Blender-Objects',
            demo_link: 'https://samet-jr.itch.io/work-with-your-past'
        },
    ]
  return (
    <div id='projects' className="container">
        <h2>My projects</h2>
        <div className="cards-container">
        {
            projects.map((project, index) => {
                return <ProjectCard
                key={index}
                 img={project.img}
                  name={project.name}
                   desc={project.desc}
                    github_link={project.github_link}
                     demo_link={project.demo_link}
                      editor_enabled={index == 3}/>
            })
        }
        </div>
    </div>
  )
}

export default Projects