import { exampleData, dataSet1 } from "./data";

interface List {
    right: Array<number>
    left: Array<number>
    distance: Array<number>
    similarity: Array<number>
}

class Day1 {

    input: string;
    lists: List;
    totalDistance: number;
    totalSimilarity: number;

    constructor(data) {
        this.input = data
        this.lists = {right: [], left: [], distance: [], similarity: []}
    }

    run() {
        this.splitIntoLists()
        this.lists.left.sort()
        this.lists.right.sort()
        this.calculateDistance()
        this.calculateSimilarity()
        this.totalDistance = this.lists.distance.reduce((acc, curr) => acc + curr)
        this.totalSimilarity = this.lists.similarity.reduce((acc, curr) => acc + curr)
        // console.log('lists', this.lists)
        console.log('totalDistance: ', this.totalDistance)
        console.log('totalSimilarity: ', this.totalSimilarity)
    }

    splitIntoLists() {
        this.input.split('\n').forEach((dataPair)=> {
            if (!!dataPair) {
                const res = dataPair.split('   ')
                this.lists.left.push(parseInt(res[0]))
                this.lists.right.push(parseInt(res[1]))
            }
        })
    }

    calculateDistance() {
        for (let i = 0; i < this.lists.left.length; i++) {
            this.lists.distance[i] = Math.abs(this.lists.left[i] - this.lists.right[i])
        }
    }

    calculateSimilarity() {
        for (let i = 0; i < this.lists.left.length; i++) {
            this.lists.similarity[i] = this.lists.right.filter((number) =>
                this.lists.left[i] == number).length * this.lists.left[i]
        }

    }
}


const exampleDay1 = new Day1(exampleData)
exampleDay1.run()
const dataSet1Day1 = new Day1(dataSet1)
dataSet1Day1.run()

