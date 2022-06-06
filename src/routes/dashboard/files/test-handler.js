export function handleDelete(event) {
    const id = event.detail.id; // position in myObjectArray
    const body = event.detail.body; // object to delete
    console.log(JSON.stringify(event.detail.body));
          myObjectArray = arrayRemove(myObjectArray, id);
}

export function handleUpdate(event) {
    const id = event.detail.id; // position in table
    const body = event.detail.body;
    console.log(JSON.stringify(body));
    myObjectArray[id] = body;
}

export function handleCreate(event) {
    alert('do sthg')
}

export function handleDetails(event) {
    const id = event.detail.id; // position in table
    const body = event.detail.body;
    console.log(JSON.stringify(body));
          alert(JSON.stringify(body))
}

export function handleSort(e) {
    console.log(e);
}

function arrayRemove(arr, value) {
let temp = clone(arr);
return temp.filter(function (ele, i) {
    return i !== value;
});
}

function clone(arr) {
return JSON.parse(JSON.stringify(arr))
}