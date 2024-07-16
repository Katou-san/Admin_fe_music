export const Convert_Title = (title: string) => {
    switch (title.toLowerCase()) {
        case "like":
            return "Like"
        case "user_id":
            return "User"
        case "category_id":
            return "Category"
        case "tag":
            return "Tag"
        case "color":
            return "Color"
        case "is_publish":
            return "Publish"
        case "song_id":
            return "Id"
        case "role":
            return "Role"
        case "is_premium":
            return "Premium"
        case "status":
            return "Status"
        case "is_publish":
            return 'Publish'
        case "role_name":
            return "Role"
        default:
            return "Unknown"
    }
}