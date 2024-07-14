#pragma once

#define PRIdPTR  "ld"
#define PRIxPTR  "lx"

#if defined(__ILP32__)

#define PRId32  "ld"
#define PRIu32  "lu"
#define PRIx32  "lx"
#define PRId64  "lld"
#define PRIu64  "llu"
#define PRIx64  "llx"

#elif defined(__LP64__)

#define PRId32  "d"
#define PRIu32  "u"
#define PRIx32  "x"
#define PRId64  "ld"
#define PRIu64  "lu"
#define PRIx64  "lx"

#else
// ?
#endif

#define PRIdMAX  "lld"
#define PRIuMAX  "llu"
#define PRIoMAX  "llo"
