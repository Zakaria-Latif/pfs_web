export class Match {
    id: number;
    name: string;
    location: string;
    time: string;
    duration: number;
    players: number;
    prize: string;
    playersNumber: number;
    category: string;
    posterImage?: string;
    creatorId?:number=-1;
    playersList: Array<any>=[];
    creator: any={};
    invitations: any[]=[];

    constructor(){
        this.playersNumber=10;
        this.duration=0;
        this.id=1;
        this.name="";
        this.location="";
        this.time="2024-03-13T00:58:30.000Z";
        this.players=0;
        this.prize="";
        this.duration=1;
        this.category="Football";
        this.posterImage="https://freedesignfile.com/upload/2019/02/football-match-design-poster-vector.jpg";
    }
}