function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    //Vertex Shader
    var vertexShaderCode = "void main () {" + "}";

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);


    //Fragment Shader
    var fragmentShaderCode = `
          void main () {
              
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    //Comparing to C-Programming, we may imagine
    // that up to this step we have created two object files (.o),
    // For the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // RGB and Alpha
    gl.clear(gl.COLOR_BUFFER_BIT);

}