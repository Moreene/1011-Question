import axios from "axios";
const url = 'https://shannon945.github.io/farm_produce/data.json';

let data = []; // Uncaught ReferenceError: data is not defined

function test() {
    axios.get(url)
        .then(function (response) {
            data = response.data;
        });
};
test();
