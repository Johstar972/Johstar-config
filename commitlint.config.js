export default {
  extends: ["@commitlint/config-angular"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
      ],
    ],
  },
};