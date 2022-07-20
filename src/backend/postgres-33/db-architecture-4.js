// Postgres 33

// Database Architecture 33.4

    // overview: In this lesson, you will learn about PostgreSQL, a relational database management system, which means that it is a system for managing data stored in rows and columns, similar to that of a spreadsheet.

// terms:

    // relational database management system: RDBMS, a class of programs that can be used to create, update, and administer a relational database

    // primary key: a field that uniquely identifies the recores in a table

// What is a database?

    // A database is defined as an organized collection of data, generally stored and accessed electronically from a computer system.

// Storing Data

    // How would you resolve this? Instead of having one massive spreadsheet, you can use a database and separate the information into separate bite-size "spreadsheets" called tables.

// Tables

    // Like a spreadsheet, a table consists of columns and rows.

    // Like a spreadsheet, a table has a fixed number of columns and can have any number of rows.

    // Each row, which represents a complete record of the specific data, is typically identified by one or more values called the primary key.

    // A primary key is a special table column, or combination of columns, that uniquely identifies each table record. No two rows in a table can have the same primary key. 

// Fields

    // Every table is made up of a fixed set of fields.

    // A field's data type is the most important property because it determines what kind of data the field can store.

    // A field's data type also determines other important field qualities, such as the following:

        // Which formats can be used with the field

        // The maximum size of a field value

// When To Use Which Data Type

    // Think of the field's data type as a set of rules that apply to all the values that are contained in the field. 

    // You don't need to know every data type available, but you should know the most common ones and how they are used. 

    // The following are the most common data types available in PostgreSQL.

        // DATA TYPE: USE TO STORE

        // bool: only logical boolean values: True or False

        // char: fixed-length character data where the number of characters is always the same. This could be used to store information such as state code, zip code, or phone number

        // varchar: variable-length character data, up to 1 GB max. This could be used to store information such as name, address or city

        // date: calendar date (year, month, day) without time

        // int: integers from -2,147,483,648 to +2,147,483,647

        // numeric: exact numeric values

        // smallint: integer from -32,768 to +32,767

        // smallserial: Auto-incrementing integer from 1 to 32,767. This could be used to store information such as a primary key for a table that will never have more than 32,766 rows—like a table to store application settings.

        // serial: Auto-incrementing integer from 1 to 2,147,483,647. This could be used to store information such as a primary key for a table.

        // text: variable-length characters of any length

        // time: time of day (no date)

        // timestamp: date and time (no time zone)

        // uuid: Universally unique identifier (for example, 28e3d683-e619-46c8-b444-a0f45817db2d)

// PostgreSQL documentation https://www.postgresql.org/docs/current/datatype.html