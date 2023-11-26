cmake_minimum_required(VERSION 3.24)
project(tic-tac-toe)

set(CMAKE_CXX_STANDARD 20)

if (DEFINED EMSCRIPTEN)
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/../../src/wasm)

    add_executable(
        tic-tac-toe
        src/main.cpp
    )

    # target_include_directories(${PROJECT_NAME} PUBLIC ${PROJECT_SOURCE_DIR}/include)

    #set(CMAKE_EXECUTABLE_SUFFIX ".html")
    add_compile_definitions("__EMSCRIPTEN__")
    target_link_options(${PROJECT_NAME} PRIVATE
        "-sMODULARIZE=1"
        "-sEXPORT_NAME='Main'"
        "-sEXPORTED_FUNCTIONS=['_int_sqrt', '_very_slow_function']"
        "-sEXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']"
        "-O3"
    )
endif()