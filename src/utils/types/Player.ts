export class Player {
    id: number;
    username: string;
    location: string;
    description: string;
    createdAt: string;
    playerStatistics: {
      rate: number;
      matchesNumber: number;
      position: string;
    };
    playerImage?: string;
  
    constructor(
      id: number,
      username: string,
      location: string,
      description: string,
      createdAt: string,
      playerStatistics: {
        rate: number;
        matchesNumber: number;
        position: string;
      },
      playerImage?: string
    ) {
      this.id = id;
      this.username = username;
      this.location = location;
      this.description = description;
      this.createdAt = createdAt;
      this.playerStatistics = playerStatistics;
      this.playerImage = playerImage;
    }
  }