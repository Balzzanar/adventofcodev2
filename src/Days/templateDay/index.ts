import { smallData } from "./data";
import { useCommon } from '../../Commons/useCommon';

const { sayHI } = useCommon()

class Day1 {
    run() {
        console.log('data', smallData)
        console.log('function', sayHI())
    }
}


const day1 = new Day1()
day1.run()

console.log('from day 1: ', smallData)

