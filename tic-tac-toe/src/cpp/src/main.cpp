#include <iostream>
#include <vector>

extern "C" {
int make_move(char *field);
}

enum game_state { AI_WON, HUMAN_WON, DRAW, IN_PROGRESS };
enum cell_state { EMPTY, HUMAN, AI };
typedef std::vector<std::vector<cell_state>> field_t;
field_t vectorize_field(char *field_str);
int minimax(field_t &field, int depth, bool is_maximizing);
game_state get_game_state(field_t &field);

int make_move(char *field_str) {
  field_t field = vectorize_field(field_str);

  int best_score = std::numeric_limits<int>::min();
  int best_move = -1;

  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (field[i][j] != EMPTY) continue;

      field[i][j] = AI;
      int score = minimax(field, 0, false);
      field[i][j] = EMPTY;

      if (score > best_score) {
        best_score = score;
        best_move = i * 3 + j;
      }
    }
  }

  return best_move;
}

field_t vectorize_field(char *field) {
  field_t vectorized_field(3, std::vector<cell_state>(3, EMPTY));

  for (int i = 0; i < 9; i++) {
    if (field[i] == 'A') vectorized_field[i / 3][i % 3] = AI;
    else if (field[i] == 'H') vectorized_field[i / 3][i % 3] = HUMAN;
  }

  return vectorized_field;
}

int minimax(field_t &field, int depth, bool is_maximizing) {
  game_state state = get_game_state(field);
  if (state == AI_WON) return 1;
  if (state == HUMAN_WON) return -1;
  if (state == DRAW) return 0;

  int best_score;
  if (is_maximizing) best_score = std::numeric_limits<int>::min();
  else best_score = std::numeric_limits<int>::max();

  for (int i = 0; i < 3; ++i) {
    for (int j = 0; j < 3; ++j) {
      if (field[i][j] != EMPTY) continue;

      field[i][j] = is_maximizing ? AI : HUMAN;
      int new_score = minimax(field, depth + 1, !is_maximizing);
      field[i][j] = EMPTY;

      if (is_maximizing) best_score = std::max(best_score, new_score);
      else best_score = std::min(best_score, new_score);
    }
  }

  return best_score;
}

game_state get_game_state(field_t &field) {
  for (int i = 0; i < 3; i++) {
    if (field[i][0] == field[i][1] && field[i][1] == field[i][2] && field[i][0] != EMPTY) {
      if (field[i][0] == AI) return AI_WON;
      else return HUMAN_WON;
    }
    if (field[0][i] == field[1][i] && field[1][i] == field[2][i] && field[0][i] != EMPTY) {
      if (field[0][i] == AI) return AI_WON;
      else return HUMAN_WON;
    }
  }
  if (field[0][0] == field[1][1] && field[1][1] == field[2][2] && field[0][0] != EMPTY) {
    if (field[0][0] == AI) return AI_WON;
    else return HUMAN_WON;
  }
  if (field[0][2] == field[1][1] && field[1][1] == field[2][0] && field[0][2] != EMPTY) {
    if (field[0][2] == AI) return AI_WON;
    else return HUMAN_WON;
  }

  bool is_full = true;
  for (int i = 0; i < 9; i++) {
    if (field[i / 3][i % 3] == EMPTY) {
      is_full = false;
      break;
    }
  }
  if (is_full) return DRAW;

  return IN_PROGRESS;
}