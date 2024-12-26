# Product Mapping System

## Description
The **Product Mapping System** is a tool designed to automatically and manually map product names received from multiple suppliers to standardized product names used by the buyer. The system addresses variations in product names, such as differences in abbreviations, spacing, or terminology, by matching them to a single, consistent name for easy processing in the accounting system.

This application helps in:

- Managing and mapping product names from different suppliers to a standardized format.
- Automatically mapping known variations using a dictionary.
- Allowing manual mapping for first-time or unknown product names.
- Keeping the mapping dictionary updated with new variations over time.

## Features
- **Manual Matching**: Allows users to manually match supplier product names with standardized names.
- **Automatic Matching**: Uses a predefined dictionary to automatically match product names to their standardized equivalents.
- **Text Variation Handling**: Handles basic variations like case differences, spacing, and common abbreviations.
- **Dynamic Updates**: Allows the system to update and maintain the mapping dictionary for new product name variations.
- **Search Functionality**: Provides a search interface to find existing mappings by supplier name or standardized name.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Library for API requests**: Axios (for fetching product mappings)

## Functionality
### Mapping Product Names
The system compares product names from suppliers with standardized names. It can handle:

- Variations in case (e.g., "A4 Paper" vs. "a4 paper")
- Common abbreviations (e.g., "500sh" vs. "500 sheets")
- Variations in phrasing (e.g., "Sticky Notes 3x3" vs. "3x3 Yellow Sticky Notes")

### Manual Entry
When an unknown product name is encountered, the user can manually match it to a standardized name, which is then added to the mapping dictionary for future automatic matching.

### Search
Users can search for existing mappings by supplier name or standardized name, making it easy to find and edit entries.

### Updates to the Mapping Dictionary
New product variations can be added manually through the UI or automatically when new variations are detected.

## Assumptions
- The system assumes that supplier product names are consistent once entered. If the names vary in unexpected ways, manual intervention may be needed.
- The mapping dictionary can be expanded with new variations over time.

## Use Cases

### Can Handle:
- Standardizing product names for accounting or inventory systems.
- Automatic mapping of known variations of product names from different suppliers.
- Manual matching for first-time or unknown product names.

### Cannot Handle:
- Product names with significantly different meanings or contexts (e.g., "Paper" vs. "Plastic").
- Complex matching logic beyond basic variations (e.g., synonyms or product types).

## Future Improvements
- **Machine Learning Integration**: Implement an AI-based approach to automatically suggest mappings based on patterns in the product names.
- **User Authentication**: Allow users to log in and have access to different levels of features (e.g., admin vs. regular user).
- **User Interface Enhancements**: Improve the UI for better usability and easier interaction with the mapping system.
- **Advanced Search**: Provide more advanced search and filtering options, such as filtering by category, price, etc.
