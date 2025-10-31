// A simple validation library to replace Zod functionality
// This doesn't require any external dependencies

type ValidationRule = {
  type: string
  message: string
  value?: any
  test?: (value: any) => boolean
}

type ValidationSchema = {
  [key: string]: {
    rules: ValidationRule[]
  }
}

export type ValidationErrors = {
  [key: string]: string | undefined
}

export class FormValidator {
  private schema: ValidationSchema

  constructor(schema: ValidationSchema) {
    this.schema = schema
  }

  // Create a string field with validation rules
  static string(fieldName: string): FieldBuilder {
    return new FieldBuilder(fieldName, "string")
  }

  // Create a number field with validation rules
  static number(fieldName: string): FieldBuilder {
    return new FieldBuilder(fieldName, "number")
  }

  // Create a boolean field
  static boolean(fieldName: string): FieldBuilder {
    return new FieldBuilder(fieldName, "boolean")
  }

  // Create an object schema from field builders
  static object(fields: FieldBuilder[]): ValidationSchema {
    const schema: ValidationSchema = {}

    fields.forEach((field) => {
      schema[field.fieldName] = {
        rules: field.rules,
      }
    })

    return schema
  }

  // Validate data against the schema
  validate(data: any): ValidationErrors {
    const errors: ValidationErrors = {}

    Object.entries(this.schema).forEach(([fieldName, field]) => {
      const value = data[fieldName]

      for (const rule of field.rules) {
        let isValid = true

        switch (rule.type) {
          case "required":
            isValid = value !== undefined && value !== null && value !== ""
            break
          case "min":
            if (typeof value === "string") {
              isValid = value.length >= rule.value
            } else if (typeof value === "number") {
              isValid = value >= rule.value
            }
            break
          case "max":
            if (typeof value === "string") {
              isValid = value.length <= rule.value
            } else if (typeof value === "number") {
              isValid = value <= rule.value
            }
            break
          case "email":
            isValid = /\S+@\S+\.\S+/.test(value)
            break
          case "pattern":
            isValid = rule.value.test(value)
            break
          case "custom":
            isValid = rule.test ? rule.test(value) : true
            break
        }

        if (!isValid) {
          errors[fieldName] = rule.message
          break // Stop on first error for this field
        }
      }
    })

    return errors
  }

  // Create a resolver for React Hook Form
  resolver = (values: any) => {
    const errors = this.validate(values)
    const hasErrors = Object.keys(errors).length > 0

    return {
      values: hasErrors ? {} : values,
      errors: Object.entries(errors).reduce(
        (acc, [key, value]) => {
          if (value) {
            acc[key] = {
              type: "validation",
              message: value,
            }
          }
          return acc
        },
        {} as Record<string, { type: string; message: string }>,
      ),
    }
  }
}

// Builder class for creating field validation rules
export class FieldBuilder {
  fieldName: string
  fieldType: string
  rules: ValidationRule[] = []

  constructor(fieldName: string, fieldType: string) {
    this.fieldName = fieldName
    this.fieldType = fieldType
  }

  // Field is required
  required(message = "This field is required"): FieldBuilder {
    this.rules.push({
      type: "required",
      message,
    })
    return this
  }

  // Minimum length for strings or minimum value for numbers
  min(value: number, message: string): FieldBuilder {
    this.rules.push({
      type: "min",
      value,
      message,
    })
    return this
  }

  // Maximum length for strings or maximum value for numbers
  max(value: number, message: string): FieldBuilder {
    this.rules.push({
      type: "max",
      value,
      message,
    })
    return this
  }

  // Email validation
  email(message = "Please enter a valid email address"): FieldBuilder {
    this.rules.push({
      type: "email",
      message,
    })
    return this
  }

  // Regex pattern validation
  pattern(regex: RegExp, message: string): FieldBuilder {
    this.rules.push({
      type: "pattern",
      value: regex,
      message,
    })
    return this
  }

  // Custom validation function
  custom(testFn: (value: any) => boolean, message: string): FieldBuilder {
    this.rules.push({
      type: "custom",
      test: testFn,
      message,
    })
    return this
  }
}
