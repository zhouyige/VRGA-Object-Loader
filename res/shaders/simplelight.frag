#version 150

in vec3 ex_Color;
in vec3 ex_Normal;

out vec4 gl_FragColor;

void main(void) {
	gl_FragColor = vec4(ex_Color, 1.0);
}
