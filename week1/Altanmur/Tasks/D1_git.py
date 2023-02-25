class History:
    index: int
    old_value: str
    new_value: str

class MainVersionController:
    _data = []
    _history = []

    def init(self):
        pass
    def clone(self):
        pass
    def add(self, value):
        pass
    def commit(self, m: str):
        pass
    def push(self):
        pass
    def pull(self):
        pass
    def checkout(self):
        pass
    def status(self):
        pass
    def diff(self):
        pass
    
class LocalVersionController(MainVersionController):
    def __init__(self):
        self.status = ""

class Git(LocalVersionController):
    def __init__(self):
        self.index = 0
        self.value = ""
    
    def init(self):
        if len(self._data)==0:
            print("init OK")
        else:
            print("not empty")

    def clone(self):
        pass
    def add(self, value):
        self.index = len(self._data)
        self.value = value
    def commit(self, m: str):
        self.status = "w"
        
    def push(self):
        pass
    def pull(self):
        pass
    def checkout(self):
        pass
    def status(self):
        pass
    def diff(self):
        pass
    

def main():
    print("Git is VersionController")
    git = Git()
    print(git.status)
    print(git.index)
    print(git.value)
    print(git._data)

if __name__ == "__main__":
    main()