#include <emscripten.h>

extern "C"
{

    extern int sub(int a, int b);

	EMSCRIPTEN_KEEPALIVE
	int add(int a, int b)
	{
		return a + b;
	}

    EMSCRIPTEN_KEEPALIVE
    int sub10(int a)
    {
        return sub(a, 10);
    }

}