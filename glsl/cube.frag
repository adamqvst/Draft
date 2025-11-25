varying vec3 vNormal;

void main() {

    vec4 col = vec4(0.6, 0.67, 0.73, 1.0);

    col.rgb = vNormal * 0.5 + 0.5;

    gl_FragColor = vec4(col);
}