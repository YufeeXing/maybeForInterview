const testData = [
    {
      id: "1",
      name: "a",
      children: [
        { id: "1-1", name: "a0", children: [{ id: "1-1-1", name: "a01" }] },
        { id: "1-2", name: "a1" },
      ],
    },
    {
      id: "2",
      name: "b",
      children: [
        { id: "2-1", name: "b0", children: [{ id: "2-1-1", name: "b01" }] },
      ],
    },
  ];
  
  function flatMenu(arr) {
    let result = [];
    const expand = (tree) => {
      if (tree && tree.length > 0) {
        tree.forEach((item) => {
          result.push(item);
          expand(item.children);
        });
      }
    };
    expand(arr);
    return result;
  }
  
  console.log(flatMenu(testData));