
/*
    Returns true if the node represents whitespace, false otherwise
*/
function is_all_ws(nod) {
    // Use ECMA-262 Edition 3 String and RegExp features
    return !(/[^\t\n\r ]/.test(nod.textContent));
}


/*
    This function does a depth-first traversal of the DOM tree,
    printing out each node to the console
*/
function traverseAndPrintDOM(curr, indent, allNodes = false) {
    let printString = "";

    // THE ROOT NODE
    if (curr.nodeType === Node.DOCUMENT_NODE) {
        printString = curr.nodeName;
    }
    // A TEXT NODE
    else if (curr.nodeType === Node.TEXT_NODE) {
        // WHITESPACE
        if (is_all_ws(curr)) {
            printString = "\n" + indent + "|_" + "WHITESPACE";
        }
        // ACTUAL TEXT
        else {
            printString = "\n" + indent + "|_" + curr.textContent;
        }
    }
    // AN HTML ELEMENT NODE
    else {
        printString = "\n" + indent + "|_" + "<" + curr.nodeName + ">";
    }

    //RECURSE ON OUR CHILDREN
    let children = allNodes ? curr.childNodes : curr.children;
    for (let child of children) {
        printString += traverseAndPrintDOM(child, indent + "\t", allNodes);
    }
    return printString;
}

// This calls the function on the root node of the DOM
console.log(traverseAndPrintDOM(document, "", false))

