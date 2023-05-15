export class Match {
    id: number;
    name: string;
    location: string;
    day: Date;
    time: string;
    duration: number;
    players: number;
    prize: string;
    maxOfPlayers: number;
    category: string;
    posterImage?: string;

    constructor(){
        this.maxOfPlayers=10;
        this.duration=0;
        this.id=1;
        this.name="";
        this.location="";
        this.day=new Date();
        this.time=new Date().toDateString();
        this.players=0;
        this.prize="";
        this.duration=1;
        this.category="Football";
        this.posterImage="https://freedesignfile.com/upload/2019/02/football-match-design-poster-vector.jpg";
    }
}