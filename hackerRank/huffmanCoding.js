function huffmanDecode(code, root) {
    let decoded = '';
    let current = root;
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '0') {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current.left === null && current.right === null) {
            decoded += current.data;
            current = root;
        }
    }
    return decoded;
}