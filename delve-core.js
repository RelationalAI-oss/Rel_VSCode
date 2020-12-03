exports.map = {
  "def": "    Definitions\n\nDefinititions define a _computed_ relation.\n\n- `def numbers = {1; 2; 3; 4}`\n- `def netsales[x, y, z] = sales[x, y, z] - returns[x, y, z]`\n- `def grandparent = a, b: ∃(t: parent(a, t) and parent(t, b))`",
  "bound": "    Bound Declarations\n\nBound declarations define the upper-bound of a relation that is persisted in the database (and is not computed by a definition). This is similar to a SQL table, or in database theory it is known as an EDB relation.\n\nIt is not possible for the EDB relation to contain any tuple that is not in the upper-bound.\n\n- `bound parent = a, b: Person(a) and Person(b)`\n- `bound parent(a, b) = Person(a) and Person(b)`\n- `bound parent = Person, Person`\n- `bound orderdate(x, y) = Int(x) and Date(y)`",
  "implies": "    Implication\n\n`e1 implies e2` is defined as `(not e1) or (e1 and e2)`\n\nExample:\n\n- `ic no_self_edge(x,y) { edge(x,y) implies x != y }`",
  "@inline": "    Inline Annotation\n\n`@inline` specfies deferred evaluation. When referenced later in the definition of another relation, it will be evaluated at that time.",
  "@inspect": "    Inspection\n\nReturns information about a definition.\n\n`@inspect def netsales[x, y, z] = sales[x, y, z] - returns[x, y, z]`",
  "@function": "Deprecated",

  "entity": "    Entities\n\nDeclare an entity.\n\n`entity Movie movie = title_csv[_,:id];`  \n&nbsp;`     movie_companies_csv[_,:movie_id];`  \n&nbsp;`     movie_keyword_csv[_, :movie_id]`",

  "_": "Underscore is a variable without a name. It is equivalent to the relation ```x: true```, which is the infinite relation of all values. After further rewriting, this typically becomes an existental quantification of a variable with a unique name. Underscore is mostly useful if you do not care about certain arguments of relation and want to avoid introducing a named variable and quantifier.",

  "exists": "    Existential Quantification\n\nThe value of an existential quantification is ```false``` if the argument is the empty relation, and ```true``` otherwise.\n\n- `def grandparent = a, b: exists(t: parent(a, t) and parent(t, b))`",
  "∃": "    Existential Quantification\n\nSame as ```exists```. The value of an existential quantification is ```false``` if the argument is the empty relation, and ```true``` otherwise.\n\n- `def grandparent = a, b: ∃(t: parent(a, t) and parent(t, b))`",
  "forall": "    Universal Quantification\n\nUniversal quantification is ```true``` if the range (last expression) is ```true``` for the entire domain (the first expression or the domain specified in the bindings). For the empty domain, universal quantification evaluates to ```true```.\n\nThe range (right-hand side) of universal quantification has to be a formula (arity 0 relation).\n\n- `forall(p in person: age[p] > 99)`\n- `exists(c in course: forall(s in student: enrolled(c, s))`",
  "∀": "    Universal Quantification\n\nSame as ```forall```. Universal quantification is ```true``` if the range (last expression) is ```true``` for the entire domain (the first expression or the domain specified in the bindings). For the empty domain, universal quantification evaluates to ```true```.\n\nThe range (right-hand side) of universal quantification has to be a formula (arity 0 relation).\n\n- `∀(p in person: age[p] > 99)`\n- `∃(c in course: ∀(s in student: enrolled(c, s))`",
  "in": "    Binding Domain Restriction\n\n- ```x in A``` Introduces a single variable ```x``` whose domain is restricted to ```A```\n- ```x in Int``` Introduces a single variable ```x```, with domain ```Int```.\n\nDomains do not have to be finite.",
  "∈": "    Binding Domain Restriction\n\nSame as ```in```.\n\n- ```x ∈ A``` Introduces a single variable ```x``` whose domain is restricted to ```A```\n- ```x ∈ Int``` Introduces a single variable ```x```, with domain ```Int```.\n\nDomains do not have to be finite.",
  "ic": "    Integrity Constraint\n\nIntegrity constraints are positive statements: they state what needs to be true\n\nIntegrity constraints do not need to have formal parameters however when supplied the system uses these parameters for reporting constraint violations, in particular, demonstrating the actual counter examples.\n- `ic no_self_edge(x,y) { edge(x,y) implies x != y }`\n- `ic = forall(x y: edge(x,y) implies x != y)`\n- `ic(a, b) = edge(a, b) implies a != b`\n- `ic every_person_has_an_age = ∀(x: person(x) : age(x,_))`",
  "include": "    Include Files\n\n``include`` is a temporary solution for reusing code pending design of a module system.",

  "select": "    Select-From-Where and From-Where-Select\n\n`select e from b` is equivalent to `e from b`.\n\n`from b select e` is the reverse.\n\nExample:\n\n- `select x, name[f] from x, f where father(x, f)`",
  "where": "    Select-From-Where and From-Where-Select\n\n`select e from b` is equivalent to `e from b`.\n\n`from b select e` is the reverse.\n\nExample:\n\n- `select x, name[f] from x, f where father(x, f)`",

  "from": "    From Expressions\n\nFrom expressions are similar to relational abstractions, but the variables introduced by the binding are not part of the resulting value. The arity of the expression is entirely determined by the expression. Examples:\n\n- `x+1 from x in {1; 2; 3}` results in `{2; 3; 4}`\n- `x, x+1 for x in {1; 2; 3}` results in `{(1,1,2); (2,2,3); (3,3,4)}`\n\nCompare to `for`:\n\n- `x+1 for x in {1; 2; 3}` results in `{(1,2); (2,3); (3,4)}`\n- `x, x+1 for x in {1; 2; 3}` results in `{(1,1,2); (2,2,3); (3,3,4)}`",
  "for": "    Aggregation\n\n- `x+1 for x in {1; 2; 3}` results in `{(1,2); (2,3); (3,4)}`\n- `x, x+1 for x in {1; 2; 3}` results in `{(1,1,2); (2,2,3); (3,3,4)}`\n\nCompare to `from`:\n\n- `x+1 from x in {1; 2; 3}` results in `{2; 3; 4}`\n- `x, x+1 for x in {1; 2; 3}` results in `{(1,1,2); (2,2,3); (3,3,4)}`",
  
  "eq": "    eq(x,y)\n\nsame as ```=``` but different than ```equal(R,S)```",
  "neq": "    neq(x,y)\n\nsame as !=",
  "gt": "    gt(x,y)\n\nsame as >",
  "gt_eq": "    gt_eq(x,y)\n\nsame as >=",
  "lt": "    lt(x,y)\n\nsame as <",
  "lt_eq": "    lt_eq(x,y)\n\nsame as <=",
}