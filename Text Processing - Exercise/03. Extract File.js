function extractFile(input) {
    let startIndex = input.lastIndexOf("\\") + 1
    let extension = input.lastIndexOf(".") + 1
    let lastIndex = extension - 1
    console.log(`File name: ${(input.substring(startIndex, lastIndex))}`);
    console.log(`File extension: ${(input.substring(extension))}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')