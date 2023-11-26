#include <math.h>

extern "C" {
int int_sqrt(int x) { return sqrt(x); }
int very_slow_function(int x);
}

int very_slow_function(int x) {
  int result = 0;
  for (int i = 0; i < x; ++i) result += i;
  return result;
}
