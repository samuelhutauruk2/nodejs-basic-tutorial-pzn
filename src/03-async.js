function simplePromise() {
    return Promise.resolve('hello');
}

const result = await simplePromise();
console.log(result);
