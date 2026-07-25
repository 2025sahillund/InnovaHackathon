def get_next_difficulty(score):
    """
    Decide the next difficulty level based on the user's score.

    Args:
        score (int | float): Score obtained in evaluation (0-100)

    Returns:
        dict: Next difficulty and reason
    """

    # Validate score
    if score < 0 or score > 100:
        raise ValueError("Score must be between 0 and 100.")

    if score < 40:
        return {
            "next_difficulty": "Easy",
            "reason": "Needs stronger fundamentals before progressing."
        }

    elif score < 70:
        return {
            "next_difficulty": "Medium",
            "reason": "Good understanding. Continue practicing to improve."
        }

    else:
        return {
            "next_difficulty": "Hard",
            "reason": "Excellent performance. Ready for advanced challenges."
        }