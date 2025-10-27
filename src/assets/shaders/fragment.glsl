void main() {
    // Set the output color to a gradient based on the fragment's position
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 0.5, 0.0), uv.y);
    gl_FragColor = vec4(color, 1.0);
}