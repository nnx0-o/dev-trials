# TODO: Aspect-Oriented Programming Framework

Write a Python module implementing an aspect-oriented programming (AOP) framework.

## Requirements
- Implement `@aspect` class decorator and `@pointcut` / `@advice` method decorators
- Advice types: `@before(pointcut)`, `@after(pointcut)`, `@around(pointcut)`, `@after_returning(pointcut)`, `@after_throwing(pointcut)`
- Pointcut expressions: method name glob (`service.*`), class name (`UserService`), annotation presence (`@transactional`), argument type
- `@around` advice receives a `ProceedingJoinPoint` with `proceed()` to invoke the original method
- Implement weaving: dynamically replace matched methods at class definition time using `__init_subclass__`
- JoinPoint info: target object, method name, arguments, return value, exception
- Demo: logging aspect, caching aspect (memoize based on args), transaction aspect (begin/commit/rollback), and performance timing aspect
