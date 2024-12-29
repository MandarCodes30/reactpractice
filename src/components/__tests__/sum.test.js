import { sum } from "../sum";

test("sum function should calculate sum of 2 numbers",()=>{
    const result = sum(1,2);

    expect(result).toBe(3);
})