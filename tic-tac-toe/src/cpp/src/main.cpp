#include <ctime>
#include <iostream>
#include <vector>

extern "C" {
int make_move(char *field);
}

int make_move(char *field) {
  srand(time(NULL));
  std::vector<int> possible_moves;
  for (int i = 0; i < 9; i++) {
    if (field[i] == '0') possible_moves.push_back(i);
  }

  return possible_moves[rand() % possible_moves.size()];
}
