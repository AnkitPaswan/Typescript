

// class KeyValuePair<T, U>
// {
//     private key: T;
//     private val: U;

//     setKeyValue(key: T, val: U): void {
//         this.key = key;
//         this.val = val;
//     }

//     display(): void {
//         console.log(`Key = ${this.key}, val = ${this.val}`);
//     }
// }

// let kvp1 = new KeyValuePair<number, string>();
// kvp1.setKeyValue(1, "Steve");
// kvp1.display(); //Output: Key = 1, Val = Steve 

// let kvp2 = new KeyValuePair<string, string>();
// kvp2.setKeyValue("CEO", "Bill");
// kvp2.display(); //Output: Key = CEO, Val = Bill



class StudentInfo<T, U>
{
    private Id: T;
    private Name: U;
    setValue(id: T, name: U): void {
        this.Id = id;
        this.Name = name;
    }
    display(): void {
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);
    }
}
let st = new StudentInfo<number, string>();
st.setValue(101, "Virat");
st.display();
let std = new StudentInfo<string, string>();
std.setValue("201", "Rohit");
std.display(); 