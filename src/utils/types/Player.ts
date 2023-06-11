export class Player {
    id = -1;
    username = "";
    location = "";
    description = "";
    createdAt = "";
    playerStatistics: any = {};
    playerImage = "https://i.pravatar.cc/100";
    rate: number=0;
    matchesNumber: number=0;
    position: string="";
  
    // constructor(
    //   id: number,
    //   username: string,
    //   location: string,
    //   description: string,
    //   createdAt: string,
    //   playerStatistics: {
    //     rate: number;
    //     matchesNumber: number;
    //     position: string;
    //   },
    //   playerImage?: string
    // ) {
    //   this.id = id;
    //   this.username = username;
    //   this.location = location;
    //   this.description = description;
    //   this.createdAt = createdAt;
    //   this.playerStatistics = playerStatistics;
    //   this.playerImage = playerImage;
    // }
  }