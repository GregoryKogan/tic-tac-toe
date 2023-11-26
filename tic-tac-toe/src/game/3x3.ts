import { ai3x3Move } from "@/ai/ai3x3";

export enum GameStatus {
    inProgress,
    draw,
    player1Won,
    player2Won,
}

export class Game3x3 {
    field: number[][];
    turn: 1 | 2;
    againstAI: boolean;
    constructor(againstAI: boolean = true) {
        this.field = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ] as number[][];
        this.turn = 1;
        this.againstAI = againstAI;
    }

    getCell(i: number, j: number) {
        return this.field[i][j];
    }

    getTurn() {
        return this.turn;
    }

    getStatus() {
        const winner = this.getWinner();
        if (winner === 1) return GameStatus.player1Won;
        if (winner === 2) return GameStatus.player2Won;
        if (this.isDraw()) return GameStatus.draw;
        return GameStatus.inProgress;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2]) {
                if (this.field[i][0] === 0) continue;
                return this.field[i][0];
            }
        }
        for (let j = 0; j < 3; j++) {
            if (this.field[0][j] === this.field[1][j] && this.field[1][j] === this.field[2][j]) {
                if (this.field[0][j] === 0) continue;
                return this.field[0][j];
            }
        }
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) {
            if (this.field[0][0] !== 0)
                return this.field[0][0];
        }
        if (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) {
            if (this.field[0][2] !== 0)
                return this.field[0][2];
        }
        return 0;
    }

    isDraw() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === 0) return false;
            }
        return true;
    }

    replay() {
        this.field = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ] as number[][];
        this.turn = 1;
    }

    makeMove(i: number, j: number, player: 1 | 2 = 1) {
        if (this.field[i][j] !== 0) return;
        if (this.getStatus() !== GameStatus.inProgress) return;
        if (this.turn !== player) return;

        this.field[i][j] = this.turn;
        this.turn = this.turn === 1 ? 2 : 1;

        if (this.getStatus() !== GameStatus.inProgress) return;

        if (this.againstAI && this.turn === 2)
            this.makeAIMove();
    }

    async makeAIMove() {
        const { i, j } = await ai3x3Move(this.field, this.turn);
        this.makeMove(i, j, 2);
    }
}