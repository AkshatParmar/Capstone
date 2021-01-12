import spotipy
import spotipy.util as util
import time

# === 
spotifyUsername = ''
spotifyAccessScope = 'user-read-currently-playing user-modify-playback-state'
spotifyClientID = ''
spotifyClientSecret = ''
spotifyRedirectURI = 'http://google.com'

def setupSpotifyObject(username, scope, clientID, clientSecret, redirectURI):
    token = util.prompt_for_user_token(username, scope, clientID, clientSecret, redirectURI)
    return spotipy.Spotify(auth=token)


# def main():
#     global spotifyObject

