import MusicCard from "../musicCard/musicCard"
import styles from "./table.module.scss"

export default function Table() {
    
    const songs = [
        {
            numeration: 1,
            picture: "/dieWithSmile.png",
            name:"Die With A Smile",
            artist: "Lady Gaga & Bruno Mars",
            date: "16 jun, 2023",
            duration: "3:12"
        },
        {
            numeration: 2,
            picture: "./ordinary.png",
            name: "Ordinary",
            artist: "Alex Warren",
            date: "16 jun, 2023",
            duration: "3:12",
        }
    ]
    
    return(
        <>
                {songs.map((song, idx) => (
                    <MusicCard key={idx} {...song} />
                ))}
        </>
    )
}